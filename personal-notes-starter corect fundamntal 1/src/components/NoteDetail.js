import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from '../utils/date';
import DeleteButton from "./DeleteButton";

function NoteDetail({ id, title, createdAt, body, onDelete }) {
  return (
    <div>
      <h2>{title}</h2>
      <p> {showFormattedDate(createdAt)}</p>
      <p>{body}</p>
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;



// import React from "react";
// import PropTypes from "prop-types";
// import { showFormattedDate } from '../utils/date';
// import DeleteButton from "./DeleteButton";

// function NoteDetail({ id, title, createdAt, body, onDelete }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>Created At: {showFormattedDate(createdAt)}</p>
//       <p>{body}</p>
//       <DeleteButton id={id} onDelete={onDelete}/>
//     </div>
//   );
// }

// NoteDetail.propTypes = {
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     onDelete: PropTypes.func.isRequired,
// };

// export default NoteDetail;
