import React, {useEffect} from 'react';

export default React.memo((props) => {
    useEffect(() => {
        Promise.resolve().then(data => console.log('...', 'Foo:effect http executed'));
    }, []);

    return (
        <section><h1>Name: {props.name}</h1></section>
    );
});
