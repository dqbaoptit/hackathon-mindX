import dynamic from 'next/dynamic';
import './index.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { createRooms } from '../../redux/actions/room';
import Profile from '../ContributorProfile';
import initialElements from '../Roadmap/initial-elements';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetProgress, RegisterRoadmap } from '../../redux/actions/profile';
import swal from 'sweetalert';
const Roadmap = dynamic(import('../Roadmap'), {
  ssr: false,
});
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    height: '80vh',
    width: '80vw',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #eee',
    boxShadow: theme.shadows[5],
    outline: 'none',
    borderRadius: '20px',
    paddingBottom: '3rem',
    background: '#fff',
  },
}));

export default function RoadmapCard({
  img,
  title,
  description,
  author,
  descAuthor,
  rating,
  isRegistered,
  id,
}) {
  useEffect(() => {
    async function getProgress() {
      const { data } = await GetProgress(id);
    }
    if (isRegistered) getProgress();
  }, []);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerRoadmap = async () => {
    try {
      const { data } = await RegisterRoadmap(id);

      swal({
        title: 'Tham gia roadmap và phòng thành công',
        icon: 'success',
      });
      if (dataRoom._id) {
        router.push(`/room/${data.roomId}`);
      }
    } catch (err) {
      swal({
        title: 'Đã có lỗi xảy ra',
        text: err.response.data.error.message,
        icon: 'error',
      });
    }
  };
  return (
    <>
      <div className="roadmap-card" onClick={handleOpen}>
        <div className="roadmap-card__left" align="center">
          <h3>Contributor </h3>
          <div className="roadmap-card__left__img">
            <img src={img} alt="" className="img-responsive" />
          </div>
          {/* <div className="roadmap-card__left__desc">{author}</div> */}
          <div className="roadmap-card__left__desc">{descAuthor}</div>
        </div>
        <div className="roadmap-card__right">
          <div className="roadmap-card__right__title">{title}</div>
          <div className="roadmap-card__right__desc">{description}</div>
        </div>
        <div className="roadmap-card__bottom">
          <Rating name="simple-controlled" value={4} readOnly />
        </div>
      </div>
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
            <div className="roadmap-card__modal">
              <div className="roadmap-card__modal__left">
                <Roadmap
                  initialElements={initialElements}
                  roadmapId={id}
                  isRegistered={isRegistered}
                />
              </div>
              <div className="roadmap-card__modal__right">
                <Profile />
              </div>
            </div>
            {!isRegistered && (
              <div
                onClick={registerRoadmap}
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  borderRadius: '10px',
                }}
                className="btn btn--deactive"
              >
                Tham gia
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}
