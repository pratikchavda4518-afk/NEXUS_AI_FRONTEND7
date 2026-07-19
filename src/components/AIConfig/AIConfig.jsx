import { useEffect, useState } from "react";
import "./AIConfig.css";

const API = "http://127.0.0.1:8000";

export default function AIConfig() {

    const [config, setConfig] = useState({
        name: "",
        mode: "ACTIVE",
        voice: "ENGLISH"
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        loadConfig();
    }, []);

    async function loadConfig() {
        try {
            setLoading(true);
            setError("");

            const res = await fetch(`${API}/ai-info`);

            if (!res.ok) throw new Error("Unable to connect");

            const data = await res.json();

            setConfig(data);
        }
        catch {

            setError("Backend Offline");

        }
        finally {

            setLoading(false);

        }
    }

    async function saveConfig() {

        try {

            setSaving(true);
            setStatus("");

            const res = await fetch(`${API}/config`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(config)

            });

            if (!res.ok)
                throw new Error();

            const data = await res.json();

            setConfig(data);

            setStatus("Configuration Updated Successfully");

        }
        catch {

            setError("Failed to Save Configuration");

        }
        finally {

            setSaving(false);

        }

    }

    if (loading) {

        return (

            <div className="nexus-config">

                <h2>Loading AI Configuration...</h2>

            </div>

        );

    }

    return (

        <div className="nexus-config">

            <div className="config-title">

                <div className="core-circle">
                    AI
                </div>

                <div>

                    <h1>NEXUS CONTROL CENTER</h1>

                    <p>AI CORE CONFIGURATION PANEL</p>

                </div>

                <div className="online-status">

                    ● ONLINE

                </div>

            </div>

            <div className="config-grid">

                <div className="config-card">

                    <span>AI IDENTITY</span>

                    <input
                        placeholder="Enter AI Name"
                        value={config.name}
                        onChange={(e) =>
                            setConfig({
                                ...config,
                                name: e.target.value
                            })
                        }
                    />

                </div>

                <div className="config-card">

                    <span>OPERATING MODE</span>

                    <select
                        value={config.mode}
                        onChange={(e) =>
                            setConfig({
                                ...config,
                                mode: e.target.value
                            })
                        }
                    >

                        <option>ACTIVE</option>
                        <option>LEARNING</option>
                        <option>DEFENSE</option>

                    </select>

                </div>

                <div className="config-card">

                    <span>VOICE CORE</span>

                    <select
                        value={config.voice}
                        onChange={(e) =>
                            setConfig({
                                ...config,
                                voice: e.target.value
                            })
                        }
                    >

                        <option>ENGLISH</option>
                        <option>FEMALE</option>
                        <option>MALE</option>

                    </select>

                </div>

            </div>

            <button
                className="save-btn"
                onClick={saveConfig}
                disabled={saving}
            >

                {saving ? "UPDATING..." : "INITIALIZE UPDATE"}

            </button>

            {status &&

                <div className="success">

                    ✓ {status}

                </div>

            }

            {error &&

                <div className="error">

                    ✖ {error}

                </div>

            }

        </div>

    );

}