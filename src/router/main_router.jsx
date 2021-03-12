import React from "react";
import { Route, Switch } from "react-router";
import Main from "../componets/main/main";
import Message from "../componets/message/message";

const MainRouter = ({ userName, userMedia }) => {
  return (
    <Switch>
      <Route path="/my">
        <Main userName={userName} userMedia={userMedia} />
      </Route>
      <Route path="/message" component={Message} />
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default MainRouter;
