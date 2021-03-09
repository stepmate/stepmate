import { mocked } from "ts-jest/utils";

import todoListActions from "../../../../src/todo/context/actions/todoListActions";
import { getTodoList } from "../../../../src/todo/context/actions/todoListApi";
import ActionTypes from "../../../../src/todo/context/types/actionsTypes";

jest.mock("../../../../src/todo/context/actions/todoListApi");
const mockedGetTodoList = mocked(getTodoList);

describe("todoListActions", () => {
  const mockDispatch = jest.fn();
  let actions: ReturnType<typeof todoListActions>;

  describe("loadTodoList", () => {
    beforeEach(() => {
      actions = todoListActions(mockDispatch);
    });

    afterEach(() => {
      mockDispatch.mockReset();
    });

    it("should call dispatch with actions when todo list is fetched successfully", async () => {
      mockedGetTodoList.mockResolvedValue([]);

      await actions.loadTodoList();

      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.START_LOADING,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.LOAD_TODO_LIST,
        payload: [],
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.STOP_LOADING,
      });
    });

    it("should call dispatch with actions when todo list is not fetched", async () => {
      mockedGetTodoList.mockRejectedValue([]);

      await actions.loadTodoList();

      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.START_LOADING,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.ERROR_IN_LOADING_TODO_LIST,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: ActionTypes.STOP_LOADING,
      });
    });
  });
});
