function Agile() {
	this.backlog = [];
	this.addTask = function(task) {
		this.backlog.push(task);
	}
	this.addUrgentTask = function(task) {
		this.backlog.splice(0, 0, task);
	}
	this.getSprint = function(storyPoints) {
		var result = [];
		for (var i = 0; i < this.backlog.length && storyPoints; i++) {
			if (this.backlog[i].storyPoints <= storyPoints) {
				storyPoints -= this.backlog[i].storyPoints;
				result.push(this.backlog[i]);
				this.backlog.splice(i, 1);
				i--;
			}
		}
		return result;
	}
}

function Task(title, storyPoints) {
	this.title = title;
	this.storyPoints = storyPoints;
}

var agile = new Agile();