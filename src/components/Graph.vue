<script>
import { HorizontalBar } from "vue-chartjs";
import axios from "axios";
export default {
  extends: HorizontalBar,
  data() {
    return {
      data: {
        skillData: "",
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                // 0から始まる
                beginAtZero: true,
                // 最大5目盛
                maxTicksLimit: 6,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    axios
      .get("https://yukinas-portfolio.herokuapp.com/api/skill")
      .then((res) => {
        const color = [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(252, 67, 221, 0.2)",
          "rgba(109, 24, 24, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ];
        const backgroundColor = [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(252, 67, 221,0.6)",
          "rgb(109, 24, 24,0.6)",
          "rgb(201, 203, 207)",
        ];
        this.skillData = {
          labels: res.data.skill.map((x) => x.name),
          datasets: [
            {
              label: "My Skill",
              backgroundColor: color,
              borderColor: backgroundColor,
              borderWidth: 1,
              axis: "y",
              data: res.data.skill.map((x) => x.skill),
            },
          ],
        };
        this.renderChart(this.skillData, this.options);
      });
  },
};
</script>
