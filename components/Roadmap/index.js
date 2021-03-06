import './index.scss';
import React, { useState, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useStoreState,
} from 'react-flow-renderer';
import Line from './line';
import { MarkANode } from '../../redux/actions/profile';
import swal from 'sweetalert';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { GetRegisteredRoadmapById } from '../../redux/actions/profile';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    boxShadow: theme.shadows[5],
    borderRadius: '10px',
    padding: '2rem',
    textAlign: 'center',
  },
}));

const NodesDebugger = ({}) => {
  const nodes = useStoreState((state) => state.nodes);
  return null;
};

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};
const OverviewFlow = ({
  contributing,
  initialElements,
  setElements,
  roadmapId,
  isRegistered,
}) => {
  const [roadmap, setRoadmap] = useState({});
  const [filterNode, setFilterNode] = useState([...initialElements]);

  useEffect(() => {
    async function getRoadmap() {
      const { data } = await GetRegisteredRoadmapById(roadmapId);
      setRoadmap(data);
    }
    if (isRegistered) getRoadmap();
  }, []);

  const [mapDone, setMapDone] = useState(isRegistered ? false : true);
  useEffect(() => {
    if (roadmap.finished && isRegistered) {
      Object.keys(filterNode).map((item) => {
        if (
          roadmap &&
          roadmap.finished &&
          roadmap.finished.includes(filterNode[item].id)
        )
          filterNode[item].style = {
            background: 'green',
            color: '#fff',
          };
      });
      setTimeout(() => {
        setMapDone(true);
      }, 500);
    }
  }, [roadmap]);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const handleMark = async (NodeId) => {
    try {
      const { data } = await MarkANode(roadmapId, NodeId);
      swal({
        title: 'Đánh dấu hoàn thành thành công ! ',
        icon: 'success',
      });
      setMapDone(false);
      setTimeout(() => setMapDone(true), 500);
      handleClose();
    } catch (err) {
      swal({
        title: 'Đã có lỗi đáng tiếc xảy ra.',
        icon: 'error',
      });
      handleClose();
    }
  };

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [nodeId, setNodeId] = useState(null);
  return (
    <>
      {mapDone ? (
        <ReactFlow
          elements={isRegistered ? filterNode : initialElements}
          onElementClick={
            isRegistered
              ? (e, els) => {
                  handleOpen();
                  setNodeId(els?.id);
                }
              : () => {}
          }
          connectionLineComponent={Line}
          onLoad={onLoad}
        >
          <NodesDebugger />
          {contributing && (
            <MiniMap
              nodeStrokeColor={(n) => {
                if (n.style?.background) return n.style.background;
                if (n.type === 'input') return '#0041d0';
                if (n.type === 'output') return '#ff0072';
                if (n.type === 'default') return '#1a192b';
                return '#eee';
              }}
              nodeColor={(n) => {
                if (n.style?.background) return n.style.background;
                return '#fff';
              }}
              nodeBorderRadius={2}
            />
          )}
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
          }}
        >
          <h3>Loading....</h3>
        </div>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Xác nhận</h2>
            <p id="transition-modal-description">
              Xác nhận bạn hoàn thành Node học này ?
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                className="btn"
                onClick={() => {
                  handleMark(nodeId);
                }}
              >
                Xác nhận
              </div>
              <div className="btn btn--deactive" onClick={handleClose}>
                Huỷ
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default OverviewFlow;
