import React from 'react'
import DocumentTitle from 'react-document-title'

const AuthLayout = ({ children, title = "Home" }) => {
    return (
        <>
            <DocumentTitle title={title + " | Store Control"} />
            <div className="bg-secondary-emphasis  justify-content-center align-items-center vh-100">
                <div className="rounded-2xl">
                    {children}
                </div>
            </div>
        </>
    )
}

export default AuthLayout
