import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={`text-xs  w-full justify-evenly items-center flex gap-5`}>
      <a>Instagram</a>
      <a>Dribble</a>
      <a>LinkedIn</a>
    </div>
  );
}
