function campaignhelper_checkemail(email) { return new RegExp("^[\\w-_\.+]*[\\w-_\.]\@([\\w-]*[\\w]\\.)+[\\w]+[\\w]$").test(email); } function campaignhelper_submit() {    var e = document.getElementById('CH_FIELD_EMAIL');    if(!campaignhelper_checkemail(e.value)) { e.className = 'invalid'; alert('"' + e.value + '" does not appear to be a valid e-mail address. Please check it and try again.'); return false; } else { e.className = ''; }	var form = e.form;	if(typeof(CH_REQUIRED_FIELDS) != "undefined") {		var bFailed = false;		for(var i=0; i<CH_REQUIRED_FIELDS.length; i++) {			var f = CH_REQUIRED_FIELDS[i];			var valid = false;			if(f.substring(f.length-1,f.length) == '*') {				f = document.getElementById('CH_FIELD_CONTAINER_' + f.substring(9, f.length-2));				f = f.getElementsByTagName('input');				for(var j=0; j<f.length; j++) { if(f[j].checked) { valid = true; } }				for(var j=0; j<f.length; j++) { f[j].className = valid ? '' : 'invalid'; }				f = null;			} else {				f = form[f];				if(!f) { continue; }				if(f.length) {					for(var j=0; j<f.length; j++) if(f[j].checked) valid = true;					for(var j=0; j<f.length; j++) f[j].className = valid ? '' : 'invalid';					f = null;				} else if(f.getAttribute('type') == "checkbox") {					valid = f.checked;				} else {					valid = (f.value != "");				}			}			if(!valid) {				if(f) { f.className = 'invalid'; }				bFailed = true;			} else {				if(f) { f.className = ''; }			}		}		if(bFailed) {			alert('Please complete all required fields.');			return false;		}	}    form.method = 'post';    form.action = 'http://scvo.cmph.org/f/o0HMBAgKoPw';    var f = document.getElementById('campaignhelper_signup');	var p = document.getElementById('campaignhelper_progress');	f.style.display = 'none';	p.innerHTML = 'Please wait...';	p.style.display = 'block';    form.submit();	return false;}function campaignhelper_unsubscribe() {    var e = document.getElementById('CH_FIELD_EMAIL');    var form = e.form;    form.method = 'post';    form.action = 'http://scvo.cmph.org/f/o0HMBAgKoPw';	var f = document.getElementById('campaignhelper_signup');	var p = document.getElementById('campaignhelper_progress');	f.style.display = 'none';	p.innerHTML = 'Please wait...';	p.style.display = 'block';	document.getElementById('campaignhelper_op').value = 'unsubscribe';    form.submit();	return false;} document.write('
<div id="campaignhelper_form_24" class="campaignhelper_form">
<div id="campaignhelper_progress" style="display:none;"></div>
<form id="campaignhelper_signup" class="campaignhelper_signup" method="post" action="http://scvo.cmph.org/f/o0HMBAgKoPw">
<div id="CH_FIELD_CONTAINER_FORENAME" class="field">
<label for="CH_FIELD_FORENAME">Forename:</label> <input type="text" id="CH_FIELD_FORENAME" name="CH_FIELD_FORENAME" value="" size="40" />
</div>
<div id="CH_FIELD_CONTAINER_SURNAME" class="field">
<label for="CH_FIELD_SURNAME">Surname:</label> <input type="text" id="CH_FIELD_SURNAME" name="CH_FIELD_SURNAME" value="" size="40" />
</div>
<div id="CH_FIELD_CONTAINER_1" class="field">
<label for="CH_FIELD_1">Name of Organisation:</label> <input type="text" id="CH_FIELD_11" name="CH_FIELD_11" value="" size="40" />
</div>
<div id="CH_FIELD_CONTAINER_EMAIL" class="field required"><label for="CH_FIELD_EMAIL">E-mail address:</label> <input type="text" id="CH_FIELD_EMAIL" name="CH_FIELD_EMAIL" value="" size="50" />
</div>
Please tell us whether you are:
<div id="CH_FIELD_CONTAINER_2" class="field checkbox">
<label for="CH_FIELD_2"><input type="checkbox" id="CH_FIELD_2" name="CH_FIELD_2" value="1"  /> Charity/Voluntary Organisation</label>
</div>
<div id="CH_FIELD_CONTAINER_4" class="field checkbox">
<label for="CH_FIELD_4"><input type="checkbox" id="CH_FIELD_4" name="CH_FIELD_4" value="1"  /> Public Sector Organisation</label>
</div>
<div id="CH_FIELD_CONTAINER_3" class="field checkbox">
<label for="CH_FIELD_3"><input type="checkbox" id="CH_FIELD_3" name="CH_FIELD_3" value="1"  /> Business sector</label>
</div>
<div id="CH_FIELD_CONTAINER_5" class="field checkbox">
<label for="CH_FIELD_5"><input type="checkbox" id="CH_FIELD_5" name="CH_FIELD_5" value="1"  /> Individual</label>
</div>
<input type="hidden" id="campaignhelper_op" name="campaignhelper_op" />
<div class="field buttons"><input type="submit" value="Subscribe" onclick="return campaignhelper_submit();" /> </div>
<script type="text/javascript">var CH_REQUIRED_FIELDS = ["CH_FIELD_EMAIL"];</script>
</form>
</div>
');