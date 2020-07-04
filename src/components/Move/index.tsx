import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {previousProject, nextProject} from '../../actions/changeProject';
import {projects as listProjects} from '../../data/projects';
import {changeProject} from '../../actions/changeProject';

interface Props {
  direction: string;
}

function Move(props: Props) {
  const {direction} = props;
  const dispatch = useDispatch();
  const next = useSelector((state: any) => state.showProjects.next);
  const previous = useSelector((state: any) => state.showProjects.previous);

  let condition = (next >= listProjects.length && props.direction === 'next') || (previous - 1 < -1 && props.direction === "previous");


  function directionOf() {
      if (direction === 'previous') {
        dispatch(previousProject());
        dispatch(changeProject(listProjects[previous]));
      }else if (direction === 'next') {
        dispatch(nextProject());
        dispatch(changeProject(listProjects[next]));
      }
  }

  return (
    <div className={`main-selection-projects-content-${props.direction}`}>
      <div className={`main-selection-projects-content-${props.direction}-${condition ? 'boxFinal': 'box'}`} onClick={directionOf}>
        <img
          className={`main-selection-projects-content-${props.direction}-${condition ? 'boxFinal': 'box'}-icon`}
          src="/images/arrow.png"
          alt=""
          style={{cursor: condition ? '': 'pointer'}}
        ></img>
      </div>
    </div>
  );
}

export default Move;
