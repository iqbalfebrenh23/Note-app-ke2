import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote } from "../utils/index";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate("/");
  }
  return <DetailPage id={id} onDelete={onDeleteHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    return (
      <section>
        <NoteDetail {...this.state.note} onDelete={deleteNote} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  // onDelete: PropTypes.func.isRequired,
};

// DetailPage.propTypes = {
//   // note : PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
// }
export default DetailPageWrapper;






// import React from "react";
// import { useParams } from "react-router-dom";
// import NoteDetail from "../components/NoteDetail";
// // import { useNavigate } from "react-router-dom";
// import { getNote } from "../utils/index";
// import PropTypes from"prop-types";


// function DetailPageWrapper(){
//     const {id} = useParams();
//     return<DetailPage id={Number(id)}/>;
// }

// class DetailPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             note: getNote(props.id)
//         }
//     }
//     render() {
//         if (this.state.note === null) {
//             return <p>Note is not found!</p>;
//         }
    
//         return (
//             <section>
//                 <NoteDetail {...this.state.note} />
//             </section>
//         )
//     }
// }

// DetailPage.propTypes = {
//     id: PropTypes.string,
// }

// export default DetailPageWrapper;
