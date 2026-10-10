import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function AdminDashboard() {

    const [users, setUsers] = useState([]);
    const [foods, setFoods] = useState([]);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const usersResponse =
                await API.get("/users");

            const foodsResponse =
                await API.get("/food-items");

            const plansResponse =
                await API.get("/diet-plans");

            setUsers(usersResponse.data);
            setFoods(foodsResponse.data);
            setPlans(plansResponse.data);

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="app-page">

            <Navbar />

            <main className="content-main">

                <div className="page-heading">

                    <p className="small-heading">
                        ADMINISTRATION
                    </p>

                    <h1>
                        Admin Dashboard
                    </h1>

                    <p>
                        Manage Nourish system information.
                    </p>

                </div>

                <div className="admin-stats">

                    <div className="stat-card">
                        <span>👥</span>
                        <h2>
                            {users.length}
                        </h2>
                        <p>
                            Users
                        </p>
                    </div>

                    <div className="stat-card">
                        <span>🍎</span>
                        <h2>
                            {foods.length}
                        </h2>
                        <p>
                            Food Items
                        </p>
                    </div>

                    <div className="stat-card">
                        <span>🥗</span>
                        <h2>
                            {plans.length}
                        </h2>
                        <p>
                            Diet Plans
                        </p>
                    </div>

                </div>

                <div className="admin-table-card">

                    <h2>
                        Registered Users
                    </h2>

                    <table>

                        <thead>

                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Goal</th>
                                <th>Role</th>
                            </tr>

                        </thead>

                        <tbody>

                            {users.map(user => (

                                <tr key={user.id}>

                                    <td>
                                        {user.id}
                                    </td>

                                    <td>
                                        {user.name}
                                    </td>

                                    <td>
                                        {user.email}
                                    </td>

                                    <td>
                                        {user.healthGoal}
                                    </td>

                                    <td>
                                        {user.role}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </main>

        </div>
    );
}

export default AdminDashboard;