import React from "react";

interface SidebarProps {
  activeItem?: string;
}

const menuItems = [
  { icon: "🏛", label: "Dashboard", href: "/dashboard" },
  { icon: "👥", label: "Trybe", href: "/users" },
  { icon: "🎮", label: "Games", href: "/games" },
  { icon: "📋", label: "Bez.AI Courses", href: "/courses" },
  { icon: "🌍", label: "Hello World", href: "/hello-world" },
  { icon: "↔️", label: "Transfer", href: "/transfer" },
  { icon: "👤", label: "Profile", href: "/profile" },
  { icon: "👥", label: "About the Trybe", href: "/about" },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeItem = "Dashboard" }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 200,
        background: "#0a0c14",
        borderRight: "1px solid #151a2a",
        display: "flex",
        flexDirection: "column",
        padding: "16px 12px",
        fontFamily: "'Inter', system-ui, sans-serif",
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 24,
          paddingLeft: 8,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          🤓
        </div>
        <div>
          <div style={{ color: "#fff", fontSize: 13, fontWeight: 700, lineHeight: 1.2 }}>
            Sarcastic
          </div>
          <div style={{ color: "#00d4aa", fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>
            Geek Trybe
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = item.label === activeItem;
          return (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 12px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#fff" : "#6b7280",
                background: isActive
                  ? "linear-gradient(90deg, #00d4aa, #00b4d8)"
                  : "transparent",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <span style={{ fontSize: 14, filter: isActive ? "none" : "grayscale(0.6)" }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 500,
          color: "#ef4444",
          border: "1px solid rgba(239, 68, 68, 0.25)",
          cursor: "pointer",
          marginTop: 8,
        }}
      >
        <span>↪</span>
        <span>Logout</span>
      </div>
    </div>
  );
};

/* ── Top header bar (for logged-in pages) ── */
interface TopBarProps {
  username?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ username = "ELzipo" }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 200,
        right: 0,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20,
        gap: 12,
        zIndex: 15,
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
        }}
      >
        🤓
      </div>
      <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{username}</div>
      <div style={{ color: "#6b7280", fontSize: 12 }}>Dashboard</div>
      <div style={{ color: "#ef4444", fontSize: 12, fontWeight: 500 }}>Logout</div>
    </div>
  );
};

/* ── Public navbar (for login / hello-world pages without sidebar) ── */
export const PublicNavbar: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        zIndex: 15,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          🤓
        </div>
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <span style={{ color: "#00d4aa", fontSize: 13, fontWeight: 500 }}>Our Projects</span>
        <span style={{ color: "#d1d5db", fontSize: 13, fontWeight: 500 }}>Our Services</span>
        <span style={{ color: "#d1d5db", fontSize: 13, fontWeight: 500 }}>Roadmap</span>
      </div>

      <div
        style={{
          border: "1px solid #374151",
          borderRadius: 6,
          padding: "6px 16px",
          color: "#00d4aa",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        My Account
      </div>
    </div>
  );
};
