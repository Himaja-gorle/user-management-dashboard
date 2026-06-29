import "./UserTable.css";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="user-table-container">

      {/* Header */}

      <div className="table-header">
        <div>ID</div>
        <div>Name</div>
        <div>Email</div>
        <div>Company</div>
        <div>City</div>
        <div>Actions</div>
      </div>

      {/* Body */}

      {users.length === 0 ? (
        <div className="empty-users">
          No Users Found
        </div>
      ) : (
        users.map((user) => (
          <div
            className="table-row"
            key={user.id}
          >
            <div data-label="ID">
              {user.id}
            </div>

            <div data-label="Name">
              {user.name}
            </div>

            <div data-label="Email">
              {user.email}
            </div>

            <div data-label="Company">
              {user.company?.name}
            </div>

            <div data-label="City">
              {user.address?.city}
            </div>

            <div
              className="action-cell"
              data-label="Actions"
            >
              <button
                className="edit-btn"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default UserTable;