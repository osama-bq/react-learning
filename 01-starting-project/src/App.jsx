import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [tabContent, setTabContent] = useState('components');

  function handleSelect(selectedButton) {
    // selectedButton => 'Components' | 'JSX' | 'Props' | 'State'
    setTabContent(selectedButton);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} key={concept.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>
            {EXAMPLES[tabContent].code}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
