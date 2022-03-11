function (e, i) {
	var l = i.t;
	var a = l.call({});
	var c = ["unlock", "open", "release"];
	var n;
	var r = 0;
	var O, f, d, t, x, g, s;
	if (a.indexOf("EZ_21") > -1) {
		r = 0;
		while (a.indexOf("UNLOCKED") < 0) {
			O = { EZ_21: c[r] };
			Object.assign(O, i);
			a = l.call(O);
			r++;
		}
	}
	if (a.indexOf("EZ_35") > -1) {
		r = 0;
		while (a.indexOf("digit") < 0) {
			a = l.call({ EZ_35: c[r] });
			n = c[r];
			r++;
		}
		r = 0;
		while (a.indexOf("UNLOCKED") < 0) {
			f = { EZ_35: n, digit: r };
			Object.assign(f, i);
			a = l.call(f);
			r++;
		}
	}
	if (a.indexOf("EZ_40") > -1) {
		r = 0;
		while (a.indexOf("ez_prime") < 0) {
			a = l.call({ EZ_40: c[r] });
			n = c[r];
			r++;
		}
		r = 0;
		while (a.indexOf("UNLOCKED") < 0) {
			var w = [
				2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
				61, 67, 71, 73, 79, 83, 89, 97,
			];
			d = { EZ_40: n, ez_prime: w[r] };
			Object.assign(d, i);
			a = l.call(d);
			r++;
		}
	}
	if (a.indexOf("c001") > -1) {
		r = 0;
		while (a.indexOf("UNLOCKED") < 0) {
			var _ = [
				"red",
				"orange",
				"yellow",
				"lime",
				"green",
				"cyan",
				"blue",
				"purple",
			];
			t = { c001: _[r], color_digit: _[r].length };
			Object.assign(t, i);
			a = l.call(t);
			r++;
		}
	}
	if (a.indexOf("c002") > -1) {
		r = 0;
		while (a.indexOf("UNLOCKED") < 0) {
			var E = [
				"red",
				"orange",
				"yellow",
				"lime",
				"green",
				"cyan",
				"blue",
				"purple",
			];
			x = { c002: E[r], c002_complement: E[(r + 4) % 8] };
			Object.assign(x, i);
			a = l.call(x);
			r++;
		}
	}
	if (a.indexOf("c003") > -1) {
		r = 0;
		while (a.indexOf("UNLOCKED") < 0) {
			var h = [
				"red",
				"orange",
				"yellow",
				"lime",
				"green",
				"cyan",
				"blue",
				"purple",
			];
			g = {
				c003: h[r],
				c003_triad_1: h[(r + 5) % 8],
				c003_triad_2: h[(r + 3) % 8],
			};
			Object.assign(g, i);
			a = l.call(g);
			r++;
		}
	}
	if (a.indexOf("l0cket") > -1) {
		r = 0;
		while (a.indexOf("UNLOCKED") < 0) {
			var o = [
				"6hh8xw",
				"cmppiq",
				"sa23uw",
				"tvfkyq",
				"uphlaw",
				"vc2c7q",
				"xwz7ja",
			];
			s = { l0cket: o[r] };
			Object.assign(s, i);
			a = l.call(s);
			r++;
		}
	}
	return a;
};
