import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {previousProject, nextProject} from '../../actions/changeProject';
import {projects as listProjects} from '../../data/projects';
import {changeProject} from '../../actions/changeProject';
import "./move.scss";

interface Props {
  direction: string;
}

function Move(props: Props) {
  const {direction} = props;
  const dispatch = useDispatch();
  const next = useSelector((state: any) => state.showProjects.next);
  const previous = useSelector((state: any) => state.showProjects.previous);
  const conditionToNotAdvance = next >= listProjects.length;
  const conditionToNotComeBack = previous - 1 < -1;
  const directionToAdvance = direction === 'next';
  const directionToComeBack = direction === "previous";

  let conditionToNotChange = (conditionToNotAdvance && directionToAdvance) || (conditionToNotComeBack && directionToComeBack);

  function dispatchAction(action: Function, side: any) {
       dispatch(action());
       dispatch(changeProject(listProjects[side]));
  }

  function MoveOn() {
      direction === 'previous' ? dispatchAction(previousProject, previous) : dispatchAction(nextProject, next); 
  }

  return (
    <div className={`${direction}`} data-testid={`${direction}`}>
      <div data-testid={`${direction}-click`} className={`${direction}-${conditionToNotChange ? 'boxFinal': 'box'}`} onClick={MoveOn}>
        <img
          className={`${direction}-${conditionToNotChange ? 'boxFinal': 'box'}-icon`}
          src="/images/arrow.png"
          alt=""
          style={{cursor: conditionToNotChange ? '' : 'pointer'}}
        ></img>
      </div>
    </div>
  );
}

export default Move;
