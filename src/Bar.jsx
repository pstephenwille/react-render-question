import React, {useCallback, useEffect, useMemo, useState} from 'react';

export default React.memo((props) => {
    const sameReference = useCallback((props) => {
        return Promise.resolve().then(data => console.log('...', 'Bar:callback http executed'));
    }, [props]);


    useEffect(() => {
        sameReference(props);
    }, [sameReference]);

    return (
        <section><h1>Name: {props.name}</h1></section>
    );
});
