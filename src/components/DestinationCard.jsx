import React from 'react'

const styles = {
    card: {
      width: "300px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
      transition: "transform 0.3s ease-in-out",
      margin: "1rem"
    },
    cardHover: {
      transform: "scale(1.05)",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "15px",
      textAlign: "center",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    cardLocation: {
      fontSize: "1rem",
      color: "gray",
      marginBottom: "10px",
    },
    cardDescription: {
      fontSize: "0.9rem",
      marginBottom: "10px",
    },
    cardPrice: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#e63946",
    },
};

function DestinationCard({name, location, image, description, price}) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <h2 style={styles.cardTitle}>{name}</h2>
        <h4 style={styles.cardLocation}>{location}</h4>
        <p style={styles.cardDescription}>{description}</p>
        <p style={styles.cardPrice}>{price}</p>
      </div>
    </div>
  )
}

export default DestinationCard
