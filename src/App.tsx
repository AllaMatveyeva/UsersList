import { useEffect } from "react";
import { UserFilter } from "./UsersFilter";
import { UserList } from "./UsersList";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchData, userRemoveByDrag, usersReoder } from "./redux/actions";
import "./styles.scss";
import { CircularIndeterminate } from "./CircularIndeterminate";
import { User } from "./interfaces";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { height } from "@mui/system";

const App = () => {
  const users = useAppSelector((state) => state.data.users);
  const loading = useAppSelector((state) => state.data.loading);
  const error = useAppSelector((state) => state.data.error);
  const dispatch = useAppDispatch();
  let isDeleteAreaShow = "transparent";

  const handleDragEnd = ({ destination, source }: any) => {
    if (!destination) return;
    if (destination.droppableId === "delete") {
      dispatch(userRemoveByDrag(source.index));
      console.log("Delete!");
    }
    dispatch(usersReoder([source.index, destination.index]));
  };

  const handleDragStart = (props: any) => {
    isDeleteAreaShow = "green";
  };

  const handleDragUpdate = () => {
    isDeleteAreaShow = "transparent";
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  let content: any;

  if (!loading && !error) {
    content = (
      <DragDropContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
      >
        <Droppable droppableId="delete">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="delete"
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                height: "100%",
                width: "100px",
                background: isDeleteAreaShow,
              }}
            />
          )}
        </Droppable>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {users.map((user: User, index: number) => (
                <Draggable
                  key={user.id}
                  index={index}
                  draggableId={String(user?.id)}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        background: snapshot.isDragging
                          ? "#98c1d9"
                          : "transparent",
                      }}
                    >
                      <UserList key={user.id} user={user} />
                    </div>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = <CircularIndeterminate />;
  }

  return (
    <div className="wrrapperApp">
      <UserFilter />
      {content}
    </div>
  );
};

export default App;
