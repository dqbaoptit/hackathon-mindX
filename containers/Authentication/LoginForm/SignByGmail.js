import { HOST } from '../../../configs/Api';
export default function Sign() {
  return (
    <a className="gmail-btn" href={`${HOST}/auth/google`}>
      <img src="/gmail.svg" className="img-responsive" alt="" />
      Sử dụng Gmail
    </a>
  );
}
