import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setPagination } from "../features/productSlice";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status, pagination, totalCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(pagination));
  }, [pagination, dispatch]);

  const handleNextPage = () => {
    dispatch(
      setPagination({
        limit: pagination.limit,
        skip: pagination.skip + pagination.limit,
      })
    );
  };

  const handlePrevPage = () => {
    dispatch(
      setPagination({
        limit: pagination.limit,
        skip: Math.max(0, pagination.skip - pagination.limit),
      })
    );
  };

  const currentPage = Math.floor(pagination.skip / pagination.limit) + 1;
  const totalPages = Math.ceil(totalCount / pagination.limit);

  return (
    <Box>
      {status === "loading" ? (
        <Box>
          {[...Array(3)]?.map((_, index) => (
            <Box
              key={index}
              display="flex"
              gap={2}
              p={2}
              mb={3}
              className="bg-white"
            >
              <Skeleton variant="rectangular" width="30%" height={120} />
              <Box sx={{ flexGrow: 1 }}>
                <Skeleton variant="text" width="60%" height={60} />
                <Skeleton variant="text" width="80%" height={60} />
                <Skeleton variant="text" width="40%" height={60} />
              </Box>
            </Box>
          ))}
        </Box>
      ) : status === "failed" ? (
        <Typography color="error">Failed to load products</Typography>
      ) : (
        <>
          <Box>
            {items?.map((item, index) => (
              <Fragment key={`products-${index}`}>
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  gap={2}
                  p={2}
                  mb={3}
                  className="bg-white"
                >
                  <Box
                    component="img"
                    src={item?.image}
                    alt="Product"
                    sx={{
                      width: { xs: "100%", sm: "30%" },
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{item?.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        display: "block",
                        width: "100%",
                        whiteSpace: "normal",
                        overflow: "visible",
                        textOverflow: "unset",
                      }}
                    >
                      {item?.instructions}
                    </Typography>

                    <Typography variant="body2" color="success.main">
                      {item?.mealType}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        mt: 2,
                      }}
                    >
                      {item?.tags?.map((tag, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            width: "fit-content",
                            display: "inline-flex",
                            alignItems: "center",
                            px: 2,
                            py: 0.5,
                            borderRadius: "12px",
                            bgcolor: "primary.light",
                            color: "primary.contrastText",
                            fontSize: "0.875rem",
                            fontWeight: "bold",
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection="column"
                    sx={{ textAlign: { xs: "center", sm: "right" } }}
                  >
                    <Box sx={{ gap: 0.5 }}>
                      <StarIcon sx={{ color: "gold" }} />
                      <StarIcon sx={{ color: "gold" }} />
                      <StarIcon sx={{ color: "gold" }} />
                      <StarIcon sx={{ color: "gold" }} />
                      <StarIcon sx={{ color: "gray" }} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ ml: 1 }}
                      >
                        1234 reviews
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(`/product/${item?.id}`)}
                      endIcon={<ArrowOutwardIcon />}
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      View Detail
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    bgcolor: "gray",
                    mx: 2,
                    mb: 2,
                  }}
                />
              </Fragment>
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            pl={2}
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Button
              variant="outlined"
              onClick={handlePrevPage}
              disabled={pagination.skip === 0}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Previous
            </Button>
            <Typography
              variant="body1"
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              variant="outlined"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProductList;
