import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div>날짜 선택</div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>날짜</Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>수량</Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>최저가</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography sx={{ width: "33%" }}>수량</Typography>
            <Typography sx={{ width: "33%" }}>수량</Typography>
            <Typography sx={{ width: "33%" }}>최저가</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <div>상품 선택</div>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          {" "}
          <Typography sx={{ width: "33%", flexShrink: 0 }}>변동</Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            상세 수량
          </Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            상세 가격
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
