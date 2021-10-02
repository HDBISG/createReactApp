import { useRef, useEffect } from "react";

const UsePrevious = statue => {
    const ref = useRef();

    useEffect(() => {
        ref.current = statue;
    });

    return ref.current;
};

export default UsePrevious;