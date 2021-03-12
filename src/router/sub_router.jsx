import React from 'react';
import { Route, Switch } from 'react-router';
import Channel from '../componets/channel/channel';
import MainBottom from '../componets/main_bottom/main_bottom';
import Saved from '../componets/saved/saved';
import Taged from '../componets/taged/taged';

const SubRouter = ({userMedia}) => {
  return(
    <Switch>
      <Route exact path="/my">
        <MainBottom userMedia={userMedia}/>
      </Route>
      <Route path="/my/channel" component={Channel}/>
      <Route path="/my/saved" component={Saved}/>
      <Route path="/my/taged" component={Taged}/>
    </Switch>
  )

}

export default SubRouter;