

export const User = ({ user }) => {


    return (
        <>
            <div style={{ display: "flex", gap: "25px" }}>
                <h2>Name: {user.name}</h2>

                <h2>Age: {user.age}</h2>
            </div>
        </>
    )
}

