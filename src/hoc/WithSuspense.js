import React from "react";

export const withSuspense = (Container) => {
    return (props) => {
        return <React.Suspense fallback={<div>Загрузка...</div>}>
            <Container/>
        </React.Suspense>
    }
}