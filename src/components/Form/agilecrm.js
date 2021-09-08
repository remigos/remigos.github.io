var https = require('https');

export default function AgileCRMManager(domain, key, email) {
    this.domain = domain + ".agilecrm.com";
    this.key = key;
    this.email = email;

    var authStr = email + ":" + key;

    this.contactAPI = new ContactAPI(this.domain, this.key, this.email);
}

AgileCRMManager.prototype.domain = null;

AgileCRMManager.prototype.key = null;

AgileCRMManager.prototype.email = null;

AgileCRMManager.prototype.contactAPI = null;

function ContactAPI(domain, key, email) {
    this.domain = domain;
    this.key = key;
    this.email = email;
}

ContactAPI.prototype.domain = null;

ContactAPI.prototype.key = null;

ContactAPI.prototype.email = null;

ContactAPI.prototype._options = null;

ContactAPI.prototype.getOptions = function getOptions() {
    this._options = {
        host: this.domain,
        headers: {
            'Authorization': 'Basic ' + new Buffer(this.email + ':' + this.key).toString('base64'),
            'Accept': 'application/json'
        }
    };

    return this._options;
};

ContactAPI.prototype.add = function add(contact, success, failure) {
    var options = this.getOptions();
    options.path = '/dev/api/contacts';
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json';

    var post = https.request(options, function(resp) {
        resp.setEncoding('utf8');
        var body = "";
        resp.on('data', function(data) {
            body += data;
        });
        resp.on('end', function() {
            if (success) {
                try {
					console.log("Status Code = " + resp.statusCode);
                    var statusCode = resp.statusCode;
                    if (statusCode != 200){
                        console.log("Error message = " + body);
                    }
                    var contacts = JSON.parse(body);
                    success(contacts);
                } catch (ex) {
                    failure(ex);
                }
            }
        });
        resp.on('error', function(e) {
            if (failure) {
                failure(e);
            }
        });
    });

    try {
        var data = JSON.stringify(contact);
        post.write(data);
        post.end();
    } catch (ex) {
        failure(ex);
    }
};

