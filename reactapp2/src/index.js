import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApproveCard from "./ApprovalCard";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  var image = faker.image.avatar();
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are You Sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Todat at 6:30"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sid" timeAgo="Todat at 4:30" img={image} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Ajay" timeAgo="Todat at 4:30" img={image} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
