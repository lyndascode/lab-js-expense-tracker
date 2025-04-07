// Entry
class Entry {
    constructor(date,amount,description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        console.log(`${this.amount} € `);
    }

}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
      super(date, amount, description);  
      this.type = "income";  
    }
  }

// Expense
class Expense {
    constructor(date, amount, description) {
    this.date = date;          
    this.amount = amount;       
    this.description = description;} } 
class Expense extends Entry {
    constructor(date, amount, description, paid) {
      super(date, amount, description);  
      this.type = "expense";  
      this.paid = paid;  
    }
    getFormattedAmount() {
        return `-${this.amount} €`;  
      }
    }
  
// Budget
class Budget {
    constructor() {
      this.entries = [];
    }
  
    addEntry(entry) {
      this.entries.push(entry);
    }
  
    getCurrentBalance() {
      if (this.entries.length === 0) return 0;
  
      let incomeTotal = 0;
      let expenseTotal = 0;
  
      for (const entry of this.entries) {
        if (entry.type === 'income') {
          incomeTotal += entry.amount;
        } else if (entry.type === 'expense') {
          expenseTotal += entry.amount;
        }
      }
  
      return incomeTotal - expenseTotal;
    }
  }