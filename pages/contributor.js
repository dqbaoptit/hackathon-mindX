import { Roadmap } from '../components';

import '../styles/Contributor.module.scss';
import { TextField } from '@material-ui/core';
import initialElements from '../components/Roadmap/initial-elements';
import { useState } from 'react';
import { CreateNode } from '../redux/actions/node';

export default function Page() {
  const [nodes, setNodes] = useState([...initialElements]);
  const [detailNode, setDetailNode] = useState({
    title: '',
    overview: '123',
  });
  const onChange = (e) => {
    setDetailNode({ ...detailNode, [e.target.name]: e.target.value });
  };

  const onCreateNode = async () => {
    const { data } = await CreateNode({
      ...detailNode,
      references: [],
      position: { x: 0, y: 0 },
    });
    setNodes([
      ...nodes,
      {
        id: data._id,
        type: 'input output',
        position: { x: 300, y: 200 },
        data: {
          label: `${detailNode.title}`,
        },
        style: {
          background: 'yellow',
          color: '#000',
          border: '1px solid #222138',
          width: 180,
          fontWeight: 'bold',
        },
      },
    ]);
  };
  console.log(nodes);
  return (
    <div className="contributor">
      <div className="contributor__left">
        <Roadmap contributing initialElements={nodes} setElements={setNodes} />
      </div>
      <div className="contributor__right">
        <h3>Tạo Node</h3>
        <TextField
          label="Tên Node"
          style={{ width: '100%', margin: '1rem' }}
          variant="outlined"
          name="title"
          onChange={onChange}
          value={detailNode.title}
        />
        <TextField
          label="Tổng quan"
          style={{ width: '100%', margin: '1rem' }}
          variant="outlined"
          name="overview"
          onChange={onChange}
          value={detailNode.overview}
          multiline
          rows={5}
          helperText="Hiển thị tooltip"
        />
        <div className="contributor__right__btn" onClick={onCreateNode}>
          Tạo
        </div>
      </div>
    </div>
  );
}
