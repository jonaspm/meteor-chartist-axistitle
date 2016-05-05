# meteor-chartist-axistitle
This is a package to allow use of chartist-axis-title plugin with 
mfpierre:chartist-js & Meteor

*No CSS included*

*Also compatible with guihash:angular-chartist*

## Usage
	meteor add jonaspm:chartist-axistitle

### Example
	$scope.options = {
      plugins: [
			Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: 'Time (mins)',
                    axisClass: 'ct-axis-title',
                    offset: {
                        x: 0,
                        y: 40
                    },
                    textAnchor: 'middle'
                },
                axisY: {
                    axisTitle: 'Goals',
                    axisClass: 'ct-axis-title',
                    offset: {
                        x: 0,
						y: -1
                    },
                    flipTitle: false
                }
            })
        ]
	};


## Contributing
Feel free to PR or report issues.

>Documentation WIP

>Based on the works made by mattiLeBlanc with [mspi:chartistlegend](https://github.com/mattiLeBlanc/chartist-plugin-legend/)
