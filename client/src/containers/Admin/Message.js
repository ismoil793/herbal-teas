import React from 'react';

const Message = ({msg}) => {
   return (
       <div className="alert alert-info alert-dismissible fade show" role="alert">
          {msg}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">&times;</span>
          </button>
       </div>
   );
};

export default Message;