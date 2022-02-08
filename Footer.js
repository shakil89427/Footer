import React from "react";
import "./Footer.css";
import { Container, Grid } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer_main">
      <Container>
        <div className="footer_title">
          <EmojiEmotionsIcon />
          <h2>Xcite Education</h2>
        </div>
        <Grid className="footer_catagory" mt={3} mx={0} container spacing={2}>
          <Grid xs={12} md={4} lg={2}>
            <h3>Product</h3>
            <p>About</p>
            <p>Team</p>
            <p>Careers</p>
          </Grid>
          <Grid xs={12} md={4} lg={2}>
            <h3>Support</h3>
            <p>How it works</p>
            <p>Trust & Safety</p>
            <p>Help Centre</p>
          </Grid>
          <Grid xs={12} md={4} lg={2}>
            <h3>Discover</h3>
            <p>Guides</p>
            <p>Stories</p>
            <p>News</p>
          </Grid>
          <Grid xs={12} md={4} lg={2}>
            <h3>Resources</h3>
            <p>Customer Stories</p>
            <p>Business Cost Calculator</p>
            <p>Startup Cities</p>
          </Grid>
          <Grid xs={12} md={4} lg={4}>
            <h3>Browse</h3>
            <p>Freelance Services</p>
            <p>Freelance Services By Country</p>
            <p>Freelance Skills</p>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <div>
              <Facebook />
              <Twitter />
              <LinkedIn />
              <Instagram />
            </div>
          </Grid>
        </Grid>
        <div className="footer_bottom">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <small>© 2022 Xcite Education Ltd</small>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
