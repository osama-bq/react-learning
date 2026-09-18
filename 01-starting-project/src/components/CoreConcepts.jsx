import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts(props) {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                <CoreConcept  {...CORE_CONCEPTS[0]} />
                <CoreConcept  {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
        </Section>
    );
}