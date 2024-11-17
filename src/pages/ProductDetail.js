import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../features/productSlice";
import {
  Box,
  Typography,
  Chip,
  List,
  ListItem,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  if (status === "loading") {
    return (
      <Box p={4} maxWidth="lg" margin="auto">
        {/* Skeleton for Header */}
        <Card sx={{ display: "flex", mb: 4, boxShadow: 3, p: 4 }}>
          <Skeleton
            variant="rectangular"
            width="40%"
            height={200}
            sx={{ borderRadius: "8px" }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Skeleton variant="text" height={40} width="60%" />
            <Skeleton variant="text" height={20} width="80%" />
            <Skeleton variant="text" height={20} width="70%" />
            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" height={20} width="50%" />
            </Box>
            <Box display="flex" gap={1} mt={2}>
              <Skeleton variant="rectangular" width={60} height={24} />
              <Skeleton variant="rectangular" width={60} height={24} />
            </Box>
          </CardContent>
        </Card>

        {/* Skeleton for Ingredients */}
        <Box my={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Ingredients
          </Typography>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Skeleton variant="text" height={20} width="90%" />
            <Skeleton variant="text" height={20} width="85%" />
            <Skeleton variant="text" height={20} width="80%" />
          </Card>
        </Box>

        {/* Skeleton for Instructions */}
        <Box my={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Instructions
          </Typography>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Skeleton variant="text" height={20} width="95%" />
            <Skeleton variant="text" height={20} width="90%" />
            <Skeleton variant="text" height={20} width="85%" />
          </Card>
        </Box>

        {/* Skeleton for Additional Info */}
        <Box mt={4} textAlign="center">
          <Skeleton variant="text" height={20} width="60%" />
        </Box>
      </Box>
    );
  }

  if (status === "failed") {
    return (
      <Typography color="error" align="center" mt={4}>
        Failed to load product details. Please try again.
      </Typography>
    );
  }

  if (!currentProduct) {
    return null;
  }

  return (
    <Box p={4} maxWidth="lg" margin="auto">
      {/* Product Header */}
      <Card sx={{ display: "flex", mb: 4, boxShadow: 3, p: 4 }}>
        <CardMedia
          component="img"
          image={currentProduct.image}
          alt={currentProduct.name}
          sx={{
            width: "40%",
            height: "40%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {currentProduct.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {currentProduct.cuisine} | {currentProduct.difficulty} |{" "}
            {currentProduct.caloriesPerServing} calories/serving
          </Typography>
          <Box display="flex" alignItems="center" gap={1} mt={2}>
            <Typography variant="h6" color="success.main" fontWeight="bold">
              {currentProduct.rating.toFixed(1)}
            </Typography>
            <StarIcon sx={{ color: "gold" }} />
            <Typography variant="body2" color="textSecondary">
              ({currentProduct.reviewCount} reviews)
            </Typography>
          </Box>
          <Box display="flex" gap={1} mt={2}>
            {currentProduct.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
          <Box display="flex" gap={1} mt={2}>
            {currentProduct.mealType.map((type, index) => (
              <Chip key={index} label={type} variant="outlined" />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Ingredients Section */}
      <Box my={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Ingredients
        </Typography>
        <Card variant="outlined" sx={{ p: 2 }}>
          <List>
            {currentProduct.ingredients.map((ingredient, index) => (
              <ListItem key={index}>{ingredient}</ListItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* Instructions Section */}
      <Box my={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Instructions
        </Typography>
        <Card variant="outlined" sx={{ p: 2 }}>
          <List>
            {currentProduct.instructions.map((step, index) => (
              <ListItem key={index}>{`${index + 1}. ${step}`}</ListItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* Additional Info */}
      <Box mt={4} textAlign="center">
        <Typography variant="body1" color="textSecondary">
          Prep Time: {currentProduct.prepTimeMinutes} mins | Cook Time:{" "}
          {currentProduct.cookTimeMinutes} mins | Servings:{" "}
          {currentProduct.servings}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetail;
