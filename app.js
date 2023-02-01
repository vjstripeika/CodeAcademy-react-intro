"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  // <button onclick="someEvent()" class="btn">Like</button>
  return React.createElement(
    "button",
    {
      className: "btn",
      onClick: () => setLiked(true),
    },
    "Like"
  );
}

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
