interface VtuberCardProps {
  name: string;
  image: string;
  youtube: string;
  twitch: string;
  tiktok: string;
  otherPlace: string;
  oshiMark: string;
  color: string;
  loot: string;
  lewdness: string;
  variety: string;
  comfy: string;
  solo: string;
  chillin: string;
  shooter: boolean;
  mmorpg: boolean;
  gacha: boolean;
  moba: boolean;
  rythm: boolean;
  sandbox: boolean;
  horror: boolean;
  rpg: boolean;
  otherGames: string;
  drawing: boolean;
  composing: boolean;
  rigging: boolean;
  cooking: boolean;
  singing: boolean;
  developing: boolean;
  otherCreative: string;
  yeah: boolean;
  nah: boolean;
  otherFreeChat: string;
}

const VtuberCard = (props: VtuberCardProps) => {
  return (
    <div className="bg-white">
      <h1>vtuber card</h1>
      <p>Name {props.name}</p>
    </div>
  );
};

export default VtuberCard;
