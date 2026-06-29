import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import UserTable from "./components/UserTable/UserTable";
import UserForm from "./components/UserForm/UserForm";
import Pagination from "./components/Pagination/Pagination";

import { getUsers } from "./services/api";
import { searchUsers, sortUsers } from "./utils/helpers";

import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, sortField]);

  const filteredUsers = useMemo(() => {
    return sortUsers(
      searchUsers(users, search),
      sortField
    );
  }, [users, search, sortField]);

  const displayedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredUsers.slice(start, end);
  }, [filteredUsers, page, pageSize]);

  const closeModal = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  const addUser = (form) => {
    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      address: { city: form.city },
      company: { name: form.company },
    };

    setUsers((prev) => [newUser, ...prev]);
    setPage(1);

    toast.success("User Added Successfully");
    closeModal();
  };

  const updateUser = (form) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === editingUser.id
          ? {
              ...u,
              name: form.name,
              email: form.email,
              address: { city: form.city },
              company: { name: form.company },
            }
          : u
      )
    );

    toast.success("User Updated Successfully");
    closeModal();
  };

  const deleteUser = (id) => {
    if (!window.confirm("Are you sure?")) return;

    setUsers((prev) => prev.filter((u) => u.id !== id));
    setPage(1);

    toast.success("User Deleted Successfully");
  };

  return (
    <>
      <Header />

      <Toolbar
        search={search}
        setSearch={setSearch}
        sortField={sortField}
        setSortField={setSortField}
        onAdd={() => {
          setEditingUser(null);
          setShowModal(true);
        }}
      />

      {loading && (
        <div className="loading-container">
          <div className="loader"></div>
          <h3>Loading Users...</h3>
        </div>
      )}

      {!loading && error && (
        <div className="error-container">
          <h3>{error}</h3>
        </div>
      )}

      {!loading && !error && (
        <>
          <UserTable
            users={displayedUsers}
            onEdit={(user) => {
              setEditingUser(user);
              setShowModal(true);
            }}
            onDelete={deleteUser}
          />

          <Pagination
            page={page}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            total={filteredUsers.length}
          />
        </>
      )}

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2>{editingUser ? "Edit User" : "Add User"}</h2>

          <button className="close-btn" onClick={closeModal}>
            ✕
          </button>
        </div>

        <UserForm
          initialData={editingUser}
          onSubmit={editingUser ? updateUser : addUser}
        />
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;