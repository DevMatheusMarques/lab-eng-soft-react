import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import Contador from "../Semana2/Contador";

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
      <>
        <Navbar/>
        <div className="card ms-5 me-5 mt-3 mb-3 border border-info-subtle">
          <div className="card-header border border-info-subtle bg-info-subtle">
            Semana 5
          </div>
          <div className="card-body">
            <h5 className="card-title">City Quiz</h5>
            <p className="card-text">
              In which city is there a billboard that turns air into drinkable water?
            </p><br/>
            <form onSubmit={handleSubmit}>
              <textarea
                  value={answer}
                  onChange={handleTextareaChange}
                  disabled={status === 'submitting'}
              />
              <br/>
              <button disabled={answer.length === 0 || status === 'submitting'}>
                Submit
              </button>
              {error !== null && <p className="Error">{error.message}</p>}
            </form>
          </div>
        </div>
      </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
