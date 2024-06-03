import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
      <>
          <Navbar/>
          <div className="card ms-5 me-5 mt-3 mb-3 border border-info-subtle">
              <div className="card-header border border-info-subtle bg-info-subtle">
                  Semana 5
              </div>
              <div className="card-body">
                  <h1 className="card-title">Accordion</h1>
                  <h2>Almaty, Kazakhstan</h2>
                  <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
                      With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its
                      capital city.
                  </Panel>
                  <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                      The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as
                      "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple,
                      and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the
                      modern domestic apple.
                  </Panel>
              </div>
          </div>
      </>
  );
}

function Panel({title, children, isActive, onShow}) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>Show</button>
            )}
        </section>
    );
}
