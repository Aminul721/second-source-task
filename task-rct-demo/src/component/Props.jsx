export const Props = () => {
    return (
        <div className="container mx-auto">
            <h3 className="font-bold text-xl mb-2">Props vs State Explanation</h3>
            <h4 className="font-bold text-lg mb-2">Props</h4>
            <ul className="list-disc gap-5 mb-2">
                <li className="font-semibold">Passed from parent to child components.</li>
                <li className="font-semibold">Immutable (cannot be changed inside the component).</li>
                <li className="font-semibold">Used for external data or configurations.</li>
            </ul>
            
            <h4 className="font-bold text-lg mb-2">State</h4>
            <ul className="list-disc gap-5 mb-2">
                <li className="font-semibold">Maintained within the component.</li>
                <li className="font-semibold">Mutable (can be updated using setState or hooks).</li>
                <li className="font-semibold">Used for interactive data like user input.</li>
            </ul>
        </div>
    );
};
