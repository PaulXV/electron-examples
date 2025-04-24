import React from "react";
import ResBox from "./ResBox.jsx";
import DataGrid from "./DataGrid.jsx";

const ResBoxContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        alignItems: "flex-start", // Mantiene gli elementi allineati in alto
      }}
    >
      <div
        style={{
          flex: "0 1 auto", // Permette al componente di adattarsi al contenuto senza influenzare gli altri
          boxSizing: "border-box",
          padding: "8px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          minWidth: "300px", // Dimensione minima per garantire spazio
          minHeight: "150px", // Dimensione minima per garantire spazio
        }}
      >
        <ResBox width={300} height={150}>
          <p style={{ margin: 0, fontSize: "16px", color: "#333" }}>
            This is a resizable box. You can drag the bottom right corner to
            resize it.
          </p>
        </ResBox>
      </div>
      <div
        style={{
          flex: "0 1 auto", // Permette al componente di adattarsi al contenuto senza influenzare gli altri
          boxSizing: "border-box",
          padding: "8px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          minWidth: "300px",
          minHeight: "150px",
        }}
      >
        <ResBox width={300} height={150}>
          <p style={{ margin: 0, fontSize: "16px", color: "#333" }}>
            This is a resizable box. You can drag the bottom right corner to
            resize it.
          </p>
        </ResBox>
      </div>
      <div
        style={{
          flex: "0 1 auto", // Permette al componente di adattarsi al contenuto senza influenzare gli altri
          boxSizing: "border-box",
          padding: "8px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          minWidth: "780px",
          minHeight: "450px",
        }}
      >
        <ResBox width={780} height={450}>
          <DataGrid />
        </ResBox>
      </div>
    </div>
  );
};

export default ResBoxContainer;