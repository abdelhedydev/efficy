const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100
  }
];

const FormComponent = class {
  constructor(status, success, submit, result) {
    this.status = document.querySelector("select");
    this.success = document.querySelector("input");
    this.submit = document.querySelector("button");
    this.result = document.querySelector(".output");
  }
  fillingStatus() {
    oppoStatus.forEach((elemnt) => {
      this.status.add(new Option(elemnt.STATUS, elemnt.K_OPPO_STATUS));
    });
  }
  fillingSuccess(staut) {
    const element = oppoStatus.find(
      (elemet) => elemet.K_OPPO_STATUS === parseInt(staut, 10)
    );
    if (element) {
      this.success.value = element.SUCCESS;
    }
  }
  start() {
    this.fillingStatus();
    this.status.addEventListener("change", (staut) => {
      this.fillingSuccess(staut.target.value);
    });
    this.submit.addEventListener("click", (e) => {
      e.preventDefault();
      const obj = {
        status: this.status.value,
        success: this.success.value
      };
      this.result.innerHTML = `${JSON.stringify(obj)}`;
    });
  }
};

const fc = new FormComponent();
fc.start();
