import "./Stats.css";

export default function Stats() {

  const stats = [

    {
      title: "CPU",
      value: "18%",
      color: "#00f7ff",
      icon: "⚡"
    },

    {
      title: "Memory",
      value: "7.2 GB",
      color: "#00ff99",
      icon: "🧠"
    },

    {
      title: "Storage",
      value: "82%",
      color: "#ffb800",
      icon: "💾"
    },

    {
      title: "Network",
      value: "1.2 Gbps",
      color: "#7d7dff",
      icon: "🌐"
    },

    {
      title: "AI Status",
      value: "ONLINE",
      color: "#00ffff",
      icon: "🤖"
    },

    {
      title: "Security",
      value: "100%",
      color: "#00ff66",
      icon: "🛡️"
    }

  ];

  return (

    <div className="stats-grid">

      {stats.map((item, index) => (

        <div
          className="stats-card"
          key={index}
        >

          <div className="stats-top">

            <span className="stats-icon">
              {item.icon}
            </span>

            <span className="stats-title">
              {item.title}
            </span>

          </div>

          <h1
            style={{
              color: item.color
            }}
          >
            {item.value}
          </h1>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: `${60 + index * 5}%`,
                background: item.color
              }}
            ></div>

          </div>

        </div>

      ))}

    </div>

  );

}