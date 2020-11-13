import './index.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import Profile from '../ContributorProfile';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    height: '80vh',
    width: '80vw',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #eee',
    boxShadow: theme.shadows[5],
    outline: 'none',
    borderRadius: '20px',
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
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="roadmap-card" onClick={handleOpen}>
        <div className="roadmap-card__left">
          <div className="roadmap-card__left__img">
            <img src={img} alt="" className="img-responsive" />
          </div>
          <div className="roadmap-card__left__desc">Contributor : {author}</div>
          <div className="roadmap-card__left__desc">{descAuthor}</div>
        </div>
        <div className="roadmap-card__right">
          <div className="roadmap-card__right__title">{title}</div>
          <div className="roadmap-card__right__desc">{description}</div>
        </div>
        <div className="roadmap-card__bottom">{/* rating here */}</div>
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
              <div className="roadmap-card__modal__left"></div>
              <div className="roadmap-card__modal__right">
                <Profile />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
