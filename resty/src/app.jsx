import React, { useState } from 'react';
import './app.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';

function App() {
  const [request, setRequest] = useState({ method: 'get', url: '', body: '' });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    setLoading(true);
    try {
      const requestOptions = {
        method: request.method.toUpperCase(),
        headers: {
          'Content-Type': 'application/json',
        },
       // body: request.body,
      };

      if (['post', 'put'].includes(request.method)) {
        requestOptions.body = JSON.stringify(JSON.parse(request.body));
      }

      const response = await fetch(request.url, requestOptions);
      const responseData = await response.json();
      console.log('API Response:', responseData); 
      setResponse(responseData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Form
        request={request}
        setRequest={setRequest}
        handleFormSubmit={handleFormSubmit}
        loading={loading}
      />
      <Results loading={loading} response={response} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
