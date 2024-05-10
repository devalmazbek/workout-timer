import { memo } from "react";

type Props = {
  allowSound: boolean;
  setAllowSound: (allow: boolean) => void;
};

const ToggleSounds = memo(function ToggleSounds({
  allowSound,
  setAllowSound,
}: Props) {
  return (
    <button className="btn-sound" onClick={() => setAllowSound(!allowSound)}>
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
});

export default ToggleSounds;
