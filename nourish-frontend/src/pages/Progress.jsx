import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Progress() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [records, setRecords] = useState([]);

    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [notes, setNotes] = useState("");

    const [message, setMessage] = useState("");

    useEffect(() => {
        loadProgress();
    }, []);

    const loadProgress = async () => {

        if (!user?.id) return;

        try {

            const response =
                await API.get(
                    `/progress/user/${user.id}`
                );

            setRecords(response.data);

        } catch (error) {

            console.error(error);
        }
    };

    const addProgress = async (e) => {

        e.preventDefault();

        try {

            const today =
                new Date()
                    .toISOString()
                    .split("T")[0];

            await API.post("/progress", {

                userId: user.id,

                weight: Number(weight),

                bmi: Number(bmi),

                notes: notes,

                progressDate: today

            });

            setMessage(
                "Progress added successfully!"
            );

            setWeight("");
            setBmi("");
            setNotes("");

            loadProgress();

        } catch (error) {

            console.error(error);

            setMessage(
                "Failed to add progress."
            );
        }
    };

    const deleteProgress = async (id) => {

        try {

            await API.delete(
                `/progress/${id}`
            );

            loadProgress();

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
                        HEALTH JOURNEY
                    </p>

                    <h1>
                        My Progress
                    </h1>

                    <p>
                        Record and monitor your health
                        progress over time.
                    </p>

                </div>

                <div className="progress-layout">

                    <div className="form-card">

                        <h2>
                            Add Progress
                        </h2>

                        <form onSubmit={addProgress}>

                            <label>
                                Current Weight (kg)
                            </label>

                            <input
                                type="number"
                                step="0.1"
                                placeholder="Example: 55"
                                value={weight}
                                onChange={(e) =>
                                    setWeight(
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <label>
                                BMI
                            </label>

                            <input
                                type="number"
                                step="0.1"
                                placeholder="Example: 20.2"
                                value={bmi}
                                onChange={(e) =>
                                    setBmi(
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <label>
                                Notes
                            </label>

                            <textarea
                                placeholder="How are you feeling?"
                                value={notes}
                                onChange={(e) =>
                                    setNotes(
                                        e.target.value
                                    )
                                }
                                rows="4"
                            />

                            <button type="submit">
                                Save Progress
                            </button>

                        </form>

                        {message && (
                            <p className="success-message">
                                {message}
                            </p>
                        )}

                    </div>

                    <div className="progress-card">

                        <h2>
                            Progress History
                        </h2>

                        {records.length === 0 ? (

                            <div className="empty-box">
                                No progress records yet.
                            </div>

                        ) : (

                            <div className="progress-list">

                                {records.map(record => (

                                    <div
                                        className="progress-row"
                                        key={record.id}
                                    >

                                        <div>

                                            <strong>
                                                {record.weight}
                                                {" "} kg
                                            </strong>

                                            <span>
                                                BMI: {record.bmi}
                                            </span>

                                            <span>
                                                {record.progressDate}
                                            </span>

                                            {record.notes && (
                                                <p>
                                                    {record.notes}
                                                </p>
                                            )}

                                        </div>

                                        <button
                                            className="delete-small"
                                            onClick={() =>
                                                deleteProgress(
                                                    record.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Progress;