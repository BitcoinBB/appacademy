import * as StepAPIUtil from '../util/step_api_util';

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = (steps) => {
  return {
    type: RECEIVE_STEPS,
    steps
  };
};

export const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step
  };
};

export const removeStep = (step) => {
  return {
    type: REMOVE_STEP,
    step
  };
};

// Async functions
export const requestSteps = todo_id => dispatch => {
  return StepAPIUtil.fetchSteps(todo_id).then(
    steps => dispatch(receiveSteps(steps))
  );
};

export const createStep = (todo_id, step) => dispatch => {
  return StepAPIUtil.createStep(todo_id, step)
    .then(step => dispatch(receiveStep(step))
  );
};

export const updateStep = step => dispatch => {
  return StepAPIUtil.updateStep(step)
    .then(step => dispatch(receiveStep(step))
  );
};

export const destroyStep = step => dispatch => {
  return StepAPIUtil.destroyStep(step)
    .then(() => dispatch(removeStep(step))
  );
};
