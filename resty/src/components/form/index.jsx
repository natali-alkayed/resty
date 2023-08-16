import React from 'react';
import './form.scss';

const Form = ({ request, setRequest, handleFormSubmit, loading }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequest((prevRequest) => ({ ...prevRequest, [name]: value }));
  };

  const handleMethodButtonClick = (method) => {
    setRequest((prevRequest) => ({ ...prevRequest, method }));
  };

  return (
    <div>
      <label>
        URL:
        <input
          type="text"
          name="url"
          value={request.url}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button
          type="button"
          onClick={() => handleMethodButtonClick('get')}
          className={request.method === 'get' ? 'active' : ''}
        >
          GET
        </button>
        <button
          type="button"
          onClick={() => handleMethodButtonClick('post')}
          className={request.method === 'post' ? 'active' : ''}
        >
          POST
        </button>
        <button
          type="button"
          onClick={() => handleMethodButtonClick('put')}
          className={request.method === 'put' ? 'active' : ''}
        >
          PUT
        </button>

        <button
          type="button"
          onClick={() => handleMethodButtonClick('delete')}
          className={request.method === 'delete' ? 'active' : ''}
        >
          DELETE
        </button>
        
      </div>
      {['post', 'put'].includes(request.method) && (
        <textarea
          name="body"
          value={request.body}
          onChange={handleInputChange}
        ></textarea>
      )}
      <button onClick={handleFormSubmit} disabled={loading}>
        Submit
      </button>
    </div>
  );
};

export default Form;
